# GetDeploymentMicrofrontendsMfeConfigUploadState

The result of the microfrontends config upload during deployment creation / build. Only set for default app deployments. The config upload is attempted during deployment create, and then again during the build. If the config is not in the root directory, or the deployment is prebuilt, the config cannot be uploaded during deployment create. The upload during deployment build finds the config even if it's not in the root directory, as it has access to all files. Uploading the config during create is ideal, as then all child deployments are guaranteed to have access to the default app deployment config even if the default app has not yet started building. If the config is not uploaded, the child app will show as building until the config has been uploaded during the default app build. - `success` - The config was uploaded successfully, either when the deployment was created or during the build. - `waiting_on_build` - The config could not be uploaded during deployment create, will be attempted again during the build. - `no_config` - No config was found. Only set once the build has not found the config in any of the deployment's files. - `undefined` - Legacy deployments, or there was an error uploading the config during deployment create.

## Example Usage

```typescript
import { GetDeploymentMicrofrontendsMfeConfigUploadState } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentMicrofrontendsMfeConfigUploadState = "success";
```

## Values

```typescript
"success" | "waiting_on_build" | "no_config"
```