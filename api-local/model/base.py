from util.dynamodb import DynamoDB
from datetime import datetime, timedelta, timezone
import boto3, random, string, logging, sys

class Model:
    def __init__(self, tableName:str):
        self.tableName = tableName
        self.jst = timezone(timedelta(hours=+9), 'JST')

    def create_id(self):
        randlst = [random.choice(string.ascii_letters + string.digits) for i in range(10)]
        return ''.join(randlst)

    def create_table(self):
        dynamodb = DynamoDB.get_dynamodb()
        tables = dynamodb.list_tables()
        if 'TableNames' in tables and self.tableName not in tables['TableNames']:
            log = logging.getLogger('db')
            log.info('[%s.%s] %s', self.tableName, sys._getframe().f_code.co_name, datetime.now(self.jst))

            table = dynamodb.create_table(
                TableName=self.tableName,
                KeySchema=[{
                    'AttributeName': 'id',
                    'KeyType': 'HASH',
                }],
                AttributeDefinitions=[{
                    'AttributeName': 'id',
                    'AttributeType': 'S',
                }],
                ProvisionedThroughput={
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1,
                }
            )

    def create_item(self, item:dict):
        log = logging.getLogger('db')
        log.info('[%s.%s] item=%s %s', self.tableName, sys._getframe().f_code.co_name, item, datetime.now(self.jst))

        dynamodb = DynamoDB.get_dynamodb()
        return dynamodb.put_item(
            TableName=self.tableName,
            Item=item
        )

    def update_item(self, key:dict, attributeUpdates:dict):
        log = logging.getLogger('db')
        log.info('[%s.%s] key=%s attributeUpdates=%s %s', self.tableName, sys._getframe().f_code.co_name, key, attributeUpdates, datetime.now(self.jst))

        dynamodb = DynamoDB.get_dynamodb()
        return dynamodb.update_item(
            TableName=self.tableName,
            Key=key,
            AttributeUpdates=attributeUpdates
        )

    def get_all_item(self):
        log = logging.getLogger('db')
        log.info('[%s.%s] %s', self.tableName, sys._getframe().f_code.co_name, datetime.now(self.jst))

        dynamodb = DynamoDB.get_dynamodb()
        scan_data = dynamodb.scan(
            TableName=self.tableName
        )
        scan_array = DynamoDB.convert_scan_to_array(scan_data)
        return sorted(scan_array, key=lambda x: x['order'])

    def delete_tem(self, key:dict):
        log = logging.getLogger('db')
        log.info('[%s.%s] %s', self.tableName, sys._getframe().f_code.co_name, datetime.now(self.jst))

        dynamodb = DynamoDB.get_dynamodb()
        return dynamodb.delete_item(
            TableName=self.tableName,
            Key=key
        )

