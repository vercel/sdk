# GetVercelCiInvocationSource2

## Example Usage

```typescript
import { GetVercelCiInvocationSource2 } from "@vercel/sdk/models/getvercelciinvocationop.js";

let value: GetVercelCiInvocationSource2 = {
  type: "vercel-native-checks",
  deploymentId: "<id>",
  projectId: "<id>",
  deploymentTargetSlug: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `type`                   | *"vercel-native-checks"* | :heavy_check_mark:       | N/A                      |
| `deploymentId`           | *string*                 | :heavy_check_mark:       | N/A                      |
| `projectId`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `deploymentTargetSlug`   | *string*                 | :heavy_check_mark:       | N/A                      |