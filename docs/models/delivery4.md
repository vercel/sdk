# Delivery4

## Example Usage

```typescript
import { Delivery4 } from "@vercel/sdk/models/getdrainop.js";

let value: Delivery4 = {
  compression: "none",
  encoding: "json",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `compression`                                                                                        | [models.GetDrainDeliveryDrainsCompression](../models/getdraindeliverydrainscompression.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `encoding`                                                                                           | [models.GetDrainDeliveryDrainsResponseEncoding](../models/getdraindeliverydrainsresponseencoding.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endpoint`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `fileStructure`                                                                                      | [models.GetDrainDeliveryFileStructure](../models/getdraindeliveryfilestructure.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `kmsKeyId`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `objectAcl`                                                                                          | [models.GetDrainDeliveryObjectAcl](../models/getdraindeliveryobjectacl.md)                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `region`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `roleArn`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `serverSideEncryption`                                                                               | [models.GetDrainDeliveryServerSideEncryption](../models/getdraindeliveryserversideencryption.md)     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | *"s3"*                                                                                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |