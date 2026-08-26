# UploadProjectAvatarCreatorApp

## Example Usage

```typescript
import { UploadProjectAvatarCreatorApp } from "@vercel/sdk/models/uploadprojectavatarprojectsbuildmachineelasticreason.js";

let value: UploadProjectAvatarCreatorApp = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The internal ID of the Vercel App backing this principal.                                                               |
| `clientId`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The protocol-facing OAuth client ID. This may differ from {@link id} when Client ID Metadata Documents (CIMD) are used. |