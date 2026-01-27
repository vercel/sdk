# EightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFour } from "@vercel/sdk/models/userevent.js";

let value: EightyFour = {
  projectId: "<id>",
  toDeploymentId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `toDeploymentId`   | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |