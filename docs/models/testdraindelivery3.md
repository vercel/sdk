# TestDrainDelivery3

## Example Usage

```typescript
import { TestDrainDelivery3 } from "@vercel/sdk/models/testdrainop.js";

let value: TestDrainDelivery3 = {
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endpoint`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `encoding`                                                                                           | [models.TestDrainDeliveryDrainsRequestEncoding](../models/testdraindeliverydrainsrequestencoding.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `compression`                                                                                        | [models.TestDrainDeliveryDrainsCompression](../models/testdraindeliverydrainscompression.md)         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `fileStructure`                                                                                      | [models.TestDrainDeliveryFileStructure](../models/testdraindeliveryfilestructure.md)                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `roleArn`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `region`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `serverSideEncryption`                                                                               | [models.TestDrainDeliveryServerSideEncryption](../models/testdraindeliveryserversideencryption.md)   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `objectAcl`                                                                                          | [models.TestDrainDeliveryObjectAcl](../models/testdraindeliveryobjectacl.md)                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |