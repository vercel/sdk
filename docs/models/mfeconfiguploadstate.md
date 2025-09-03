# MfeConfigUploadState

The result of the microfrontends config upload during deployment creation. Only set for default app deployments. - `success` - The config was uploaded successfully. - `error` - The config upload failed. - `no_config` - No config was found to upload. - `undefined` - The config upload has not been attempted yet.

## Example Usage

```typescript
import { MfeConfigUploadState } from "@vercel/sdk/models/createdeploymentop.js";

let value: MfeConfigUploadState = "error";
```

## Values

```typescript
"error" | "success" | "no_config"
```