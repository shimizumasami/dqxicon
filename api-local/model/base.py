import boto3

class Model:
    def get_dynamodb(self):
        return boto3.client(
            'dynamodb',
            region_name='ap-northeast-1',
            endpoint_url="http://172.30.0.4:8000",
            aws_access_key_id='ACCESS_ID',
            aws_secret_access_key='ACCESS_KEY'
        )
