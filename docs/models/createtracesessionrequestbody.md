# CreateTraceSessionRequestBody

## Example Usage

```typescript
import { CreateTraceSessionRequestBody } from "@vercel/sdk/models/createtracesessionop.js";

let value: CreateTraceSessionRequestBody = {
  projectId: "<id>",
  hostname: "charming-guidance.name",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | The project ID the deployment belongs to.              |
| `hostname`                                             | *string*                                               | :heavy_check_mark:                                     | The deployment hostname to scope the trace session to. |