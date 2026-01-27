# CancelDeploymentElasticConcurrency

When elastic concurrency is used for this deployment, a value is set. The value tells the reason where the setting was coming from. - TEAM_SETTING: Inherited from team settings - PROJECT_SETTING: Inherited from project settings - SKIP_QUEUE: Manually triggered by user to skip the queues

## Example Usage

```typescript
import { CancelDeploymentElasticConcurrency } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentElasticConcurrency = "PROJECT_SETTING";
```

## Values

```typescript
"TEAM_SETTING" | "PROJECT_SETTING" | "SKIP_QUEUE"
```