# GetDrainDelivery4

## Example Usage

```typescript
import { GetDrainDelivery4 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainDelivery4 = {
  type: "s3",
  endpoint: "<value>",
  encoding: "ndjson",
  compression: "none",
  fileStructure: "hive",
  roleArn: "<value>",
  region: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *"s3"*                                                                                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endpoint`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `encoding`                                                                                           | [models.GetDrainDeliveryDrainsResponseEncoding](../models/getdraindeliverydrainsresponseencoding.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `compression`                                                                                        | [models.GetDrainDeliveryDrainsCompression](../models/getdraindeliverydrainscompression.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `fileStructure`                                                                                      | [models.GetDrainDeliveryFileStructure](../models/getdraindeliveryfilestructure.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `roleArn`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `region`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `serverSideEncryption`                                                                               | [models.GetDrainDeliveryServerSideEncryption](../models/getdraindeliveryserversideencryption.md)     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `objectAcl`                                                                                          | [models.GetDrainDeliveryObjectAcl](../models/getdraindeliveryobjectacl.md)                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |