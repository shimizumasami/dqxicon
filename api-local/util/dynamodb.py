import boto3, logging, traceback

class DynamoDB:
    def __init__(self):
        pass

    @staticmethod
    def get_dynamodb():
        if 'dynamodb' in globals():
            return dynamodb
        else:
            global g_dynamodb
            g_dynamodb = boto3.client(
                'dynamodb',
                region_name='ap-northeast-1',
                endpoint_url="http://172.30.0.4:8000",
                aws_access_key_id='ACCESS_ID',
                aws_secret_access_key='ACCESS_KEY'
            )
            return g_dynamodb

    @staticmethod
    def convert_scan_to_array(scan_data:str):
        try:
            response = []
            for item in scan_data['Items']:
                response_item = {}
                for key, value in item.items():
                    response_item.update({
                        key: list(value.values())[0]
                    })
                response.append(response_item)
            return response

        except Exception as e:
            logging.error(traceback.format_exc())
            logging.error('scan_data: %s', scan_data)
