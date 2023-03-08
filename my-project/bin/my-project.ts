#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MyProjectStack } from '../lib/my-project-stack';

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
    const infra = new MyProjectStack(app1, nameStack(),{
        env:{account:'269164092502',region:'us-east-1'}
    });
}

  
const dev = new MyProjectStack(app1,'HelloStack2',{
    env:{account:'269164092502',region:'us-east-2'}
});
