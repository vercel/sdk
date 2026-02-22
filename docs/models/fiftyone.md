# FiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyOne } from "@vercel/sdk/models/oldteam.js";

let value: FiftyOne = {
  projectId: "<id>",
  projectName: "<value>",
  hookName: "<value>",
  ref: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `hookName`         | *string*           | :heavy_check_mark: | N/A                |
| `ref`              | *string*           | :heavy_check_mark: | N/A                |