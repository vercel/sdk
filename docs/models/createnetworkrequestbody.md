# CreateNetworkRequestBody

## Example Usage

```typescript
import { CreateNetworkRequestBody } from "@vercel/sdk/models/createnetworkop.js";

let value: CreateNetworkRequestBody = {
  awsAvailabilityZoneIds: [
    "use1-az1",
  ],
  cidr: "192.168.0.0/16",
  name: "<value>",
  region: "iad1",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `awsAvailabilityZoneIds`                     | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |                                              |
| `cidr`                                       | *string*                                     | :heavy_check_mark:                           | The CIDR block of the network                | 192.168.0.0/16                               |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | The name of the network                      |                                              |
| `region`                                     | *string*                                     | :heavy_check_mark:                           | The region where the network will be created | iad1                                         |