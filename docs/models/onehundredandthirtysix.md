# OneHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySix } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndThirtySix = {
  projectId: "<id>",
  projectName: "<value>",
  path: "/boot",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `path`             | *string*           | :heavy_check_mark: | N/A                |