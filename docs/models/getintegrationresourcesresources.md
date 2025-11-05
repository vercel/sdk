# GetIntegrationResourcesResources

## Example Usage

```typescript
import { GetIntegrationResourcesResources } from "@vercel/sdk/models/getintegrationresourcesop.js";

let value: GetIntegrationResourcesResources = {
  partnerId: "<id>",
  internalId: "<id>",
  name: "<value>",
  productId: "<id>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `partnerId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID provided by the partner for the given resource                                                  |
| `internalId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID assigned by Vercel for the given resource                                                       |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The name of the resource as it is recorded in Vercel                                                   |
| `status`                                                                                               | [models.GetIntegrationResourcesStatus](../models/getintegrationresourcesstatus.md)                     | :heavy_minus_sign:                                                                                     | The current status of the resource                                                                     |
| `productId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the product the resource is derived from                                                     |
| `protocolSettings`                                                                                     | [models.GetIntegrationResourcesProtocolSettings](../models/getintegrationresourcesprotocolsettings.md) | :heavy_minus_sign:                                                                                     | Any settings provided for the resource to support its product's protocols                              |
| `notification`                                                                                         | [models.GetIntegrationResourcesNotification](../models/getintegrationresourcesnotification.md)         | :heavy_minus_sign:                                                                                     | The notification, if set, displayed to the user when viewing the resource in Vercel                    |
| `billingPlanId`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The ID of the billing plan the resource is subscribed to, if applicable                                |
| `metadata`                                                                                             | Record<string, *models.GetIntegrationResourcesMetadata*>                                               | :heavy_minus_sign:                                                                                     | The configured metadata for the resource as defined by its product's Metadata Schema                   |