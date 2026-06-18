# GetDrainsDelivery4

## Example Usage

```typescript
import { GetDrainsDelivery4 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDelivery4 = {
  type: "s3",
  endpoint: "<value>",
  encoding: "json",
  compression: "none",
  fileStructure: "hive",
  roleArn: "<value>",
  region: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *"s3"*                                                                                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `endpoint`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `encoding`                                                                                             | [models.GetDrainsDeliveryDrainsResponseEncoding](../models/getdrainsdeliverydrainsresponseencoding.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `compression`                                                                                          | [models.GetDrainsDeliveryDrainsCompression](../models/getdrainsdeliverydrainscompression.md)           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `fileStructure`                                                                                        | [models.GetDrainsDeliveryFileStructure](../models/getdrainsdeliveryfilestructure.md)                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `roleArn`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `region`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `serverSideEncryption`                                                                                 | [models.GetDrainsDeliveryServerSideEncryption](../models/getdrainsdeliveryserversideencryption.md)     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `objectAcl`                                                                                            | [models.GetDrainsDeliveryObjectAcl](../models/getdrainsdeliveryobjectacl.md)                           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |