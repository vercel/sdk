# GetProjectsCreatorProjectsApp

## Example Usage

```typescript
import { GetProjectsCreatorProjectsApp } from "@vercel/sdk/models/getprojectslinkprojects6.js";

let value: GetProjectsCreatorProjectsApp = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The protocol-facing OAuth client ID. This may differ from {@link id} when Client ID Metadata Documents (CIMD) are used. |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The internal ID of the Vercel App backing this principal.                                                               |