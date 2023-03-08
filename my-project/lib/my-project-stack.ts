import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class MyProjectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
      const importedBucketFromArn = s3.Bucket.fromBucketArn(
        this,
        'imported_wali_bucket',
        'arn:aws:s3:::my-tf-bucket-cloudfixlinter20230214182051614500000004',
      );
  
      const PBucket = new s3.Bucket(this,"bucket_created_in_P")
      console.log('bucket name 👉', importedBucketFromArn.bucketName);
      console.log('bucket arn 👉', importedBucketFromArn.bucketArn);
    }
      
}


import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { P } from '../lib/sample-stack';


export const app1 = new cdk.App();

function nameStack() {
    if (process.env.DevStack == "PROD")
    return "ProdName"
    else if (process.env.DevStack == "DEV")
        return "DevName"
    else 
      return "LastName"
  }

if( process.env.DevStack === "Dev") {
    const infra = new P(app1, nameStack(),{
        env:{account:'269164092502',region:'us-east-1'}
    });
}

  
const dev = new P(app1,'HelloStack2',{
    env:{account:'269164092502',region:'us-east-2'}
});


