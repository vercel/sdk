# Six

The payload of the event, if requested.

## Example Usage

```typescript
import { Six } from "@vercel/sdk/models/userevent.js";

let value: Six = {
  projectId: "<id>",
  projectName: "<value>",
  policyId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `policyId`         | *string*           | :heavy_check_mark: | N/A                |