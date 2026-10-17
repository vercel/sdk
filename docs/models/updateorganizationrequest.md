# UpdateOrganizationRequest

## Example Usage

```typescript
import { UpdateOrganizationRequest } from "@vercel/sdk/models/updateorganizationop.js";

let value: UpdateOrganizationRequest = {
  organizationId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `organizationId`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the organization to update.                                              |
| `requestBody`                                                                      | [models.UpdateOrganizationRequestBody](../models/updateorganizationrequestbody.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |