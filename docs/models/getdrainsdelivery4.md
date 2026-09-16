# GetDrainsDelivery4

## Example Usage

```typescript
import { GetDrainsDelivery4 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDelivery4 = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `compression`                                                                                          | [models.GetDrainsDeliveryDrainsCompression](../models/getdrainsdeliverydrainscompression.md)           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `encoding`                                                                                             | [models.GetDrainsDeliveryDrainsResponseEncoding](../models/getdrainsdeliverydrainsresponseencoding.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `endpoint`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `fileStructure`                                                                                        | [models.GetDrainsDeliveryFileStructure](../models/getdrainsdeliveryfilestructure.md)                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `objectAcl`                                                                                            | [models.GetDrainsDeliveryObjectAcl](../models/getdrainsdeliveryobjectacl.md)                           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `region`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `roleArn`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `serverSideEncryption`                                                                                 | [models.GetDrainsDeliveryServerSideEncryption](../models/getdrainsdeliveryserversideencryption.md)     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *"s3"*                                                                                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |