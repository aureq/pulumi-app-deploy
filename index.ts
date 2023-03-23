import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket-feat-2-1", {
    bucket: "some-random-name-0002"
});

// Export the name of the bucket
export const bucketName = bucket.id;
