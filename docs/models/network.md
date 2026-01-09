# Network

## Example Usage

```typescript
import { Network } from "@vercel/sdk/models/network.js";

let value: Network = {
  awsAccountId: "<id>",
  awsRegion: "<value>",
  cidr: "<value>",
  createdAt: 3758.06,
  id: "<id>",
  name: "<value>",
  status: "create_in_progress",
  teamId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `awsAccountId`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the AWS Account in which the network exists.                                           |
| `awsAvailabilityZoneIds`                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The AWS Region in which the network exists.                                                      |
| `cidr`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The CIDR range of the Network.                                                                   |
| `createdAt`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | The date at which the Network was created, represented as a UNIX timestamp since EPOCH.          |
| `egressIpAddresses`                                                                              | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `hostedZones`                                                                                    | [models.HostedZones](../models/hostedzones.md)                                                   | :heavy_minus_sign:                                                                               | Metadata about any AWS Route53 Hosted Zones associated with the Network.                         |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The unique identifier of the Network.                                                            |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The name of the network.                                                                         |
| `peeringConnections`                                                                             | [models.PeeringConnections](../models/peeringconnections.md)                                     | :heavy_minus_sign:                                                                               | Metadata about any AWS Route53 Hosted Zones associated with the Network.                         |
| `projects`                                                                                       | [models.Projects](../models/projects.md)                                                         | :heavy_minus_sign:                                                                               | Metadata about any projects associated with the Network.                                         |
| `region`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | The Vercel region in which the Network exists.                                                   |
| `status`                                                                                         | [models.Status](../models/status.md)                                                             | :heavy_check_mark:                                                                               | The status of the Network.                                                                       |
| `teamId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | The unique identifier of the Team that owns the Network.                                         |
| `vpcId`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | The ID of the VPC which hosts the network.                                                       |