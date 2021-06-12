from model.base import Model
from util.dynamodb import DynamoDB
import boto3, logging

class ColorModel(Model):
    def __init__(self, id:str=None, order:int=None, code:str=None, name:str=None):
        self.id = id
        self.order = order
        self.code = code
        self.name = name

        dynamodb = DynamoDB.get_dynamodb()

        # テーブル定義がなければ作成する
        tables = dynamodb.list_tables()
        if 'TableNames' in tables and 'Colors' not in tables['TableNames']:
            logging.info('[%s] create table Colors')
            table = dynamodb.create_table(
                TableName='Colors',
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

    def save(self):
        dynamodb = DynamoDB.get_dynamodb()

        if self.id is None:
            # 新規作成
            self.id = self.create_id()
            return dynamodb.put_item(
                TableName='Colors',
                Item={
                    'id'   : {'S': self.id},
                    'order': {'N': str(self.order)},
                    'code' : {'S': self.code},
                    'name' : {'S': self.name},
                }
            )
        else:
            # 編集
            return dynamodb.update_item(
                TableName='Colors',
                Key={
                    'id'   : {'S': self.id},
                },
                AttributeUpdates={
                    'order': {'Value': {'N': str(self.order)}},
                    'code' : {'Value': {'S': self.code}},
                    'name' : {'Value': {'S': self.name}},
                }
            )

    def all(self):
        dynamodb = DynamoDB.get_dynamodb()
        scan_data = dynamodb.scan(
            TableName='Colors'
        )
        scan_array = DynamoDB.convert_scan_to_array(scan_data)
        return sorted(scan_array, key=lambda x: x['order'])

    def delete(self):
        dynamodb = DynamoDB.get_dynamodb()
        return dynamodb.delete_item(
            TableName='Colors',
            Key={
                'id': {'S': self.id}
            })
