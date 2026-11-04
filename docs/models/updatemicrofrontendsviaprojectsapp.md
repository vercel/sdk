# UpdateMicrofrontendsViaProjectsApp

## Example Usage

```typescript
import { UpdateMicrofrontendsViaProjectsApp } from "@vercel/sdk/models/updatemicrofrontendsfrom1.js";

let value: UpdateMicrofrontendsViaProjectsApp = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The protocol-facing OAuth client ID. This may differ from {@link id} when Client ID Metadata Documents (CIMD) are used. |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The internal ID of the Vercel App backing this principal.                                                               |