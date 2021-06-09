import boto3, random, string

class Model:
    def create_id(self):
        randlst = [random.choice(string.ascii_letters + string.digits) for i in range(10)]
        return ''.join(randlst)
