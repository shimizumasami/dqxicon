from model.base import Model
from util.dynamodb import DynamoDB
import boto3, logging

class ColorModel(Model):
    def __init__(self, id:str=None, order:int=None, code:str=None, name:str=None):
        super().__init__(tableName='Colors')
        self.id = id
        self.order = order
        self.code = code
        self.name = name

        # テーブル定義がなければ作成する
        self.create_table()

    def save(self):
        if self.id is None:
            # 新規作成
            self.id = self.create_id()
            item = {
                'id'   : {'S': self.id},
                'order': {'N': str(self.order)},
                'code' : {'S': self.code},
                'name' : {'S': self.name},
            }
            return self.create_item(item=item)
        else:
            # 編集
            key = {'id': {'S': self.id}}
            attr = {
                'order': {'Value': {'N': str(self.order)}},
                'code' : {'Value': {'S': self.code}},
                'name' : {'Value': {'S': self.name}},
            }
            return self.update_item(key=key, attributeUpdates=attr)

    def all(self):
        return self.get_all_item()

    def delete(self):
        return self.delete_item(key={'id': {'S': self.id}})
