from model.base import Model
import boto3, logging

class ColorModel(Model):
    def __init__(self, id, order, code, name):
        self.id = id
        self.order = order
        self.code = code
        self.name = name

        self.dynamodb = self.get_dynamodb()

        # テーブル定義がなければ作成する
        tables = self.dynamodb.list_tables()
        if 'TableNames' in tables and 'Colors' not in tables['TableNames']:
            logging.info('[%s] create table Colors')
            table = self.dynamodb.create_table(
                TableName='Colors',
                KeySchema=[{
                    'AttributeName': 'id',
                    'KeyType': 'HASH',
                }, {
                    'AttributeName': 'order',
                    'KeyType': 'RANGE',
                }],
                AttributeDefinitions=[{
                    'AttributeName': 'id',
                    'AttributeType': 'S',
                }, {
                    'AttributeName': 'order',
                    'AttributeType': 'N',
                }],
                ProvisionedThroughput={
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1,
                }
            )

    def save(self):
        if self.id is None:
            # 新規作成
            self.id = self.create_id()
            return self.dynamodb.put_item(
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
            return self.dynamodb.update_item(
                TableName='Colors',
                Key={
                    'id'   : {'S': self.id},
                    'order': {'N': str(self.order)},
                },
                AttributeUpdates={
                    'code' : {'Value': {'S': self.code}},
                    'name' : {'Value': {'S': self.name}},
                }
            )
