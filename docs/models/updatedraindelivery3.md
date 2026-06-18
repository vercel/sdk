# UpdateDrainDelivery3

## Example Usage

```typescript
import { UpdateDrainDelivery3 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainDelivery3 = {
  type: "<value>",
  endpoint: "<value>",
  encoding: "ndjson",
  compression: "none",
  fileStructure: "hive",
  roleArn: "<value>",
  region: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `endpoint`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `encoding`                                                                                               | [models.UpdateDrainDeliveryDrainsRequestEncoding](../models/updatedraindeliverydrainsrequestencoding.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `compression`                                                                                            | [models.UpdateDrainDeliveryDrainsCompression](../models/updatedraindeliverydrainscompression.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `fileStructure`                                                                                          | [models.DeliveryFileStructure](../models/deliveryfilestructure.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `roleArn`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `region`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `serverSideEncryption`                                                                                   | [models.DeliveryServerSideEncryption](../models/deliveryserversideencryption.md)                         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `objectAcl`                                                                                              | [models.DeliveryObjectAcl](../models/deliveryobjectacl.md)                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |