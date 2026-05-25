# SeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyFive } from "@vercel/sdk/models/resources.js";

let value: SeventyFive = {
  projectId: "<id>",
  projectName: "<value>",
  checkId: "<id>",
  checkName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `checkId`          | *string*           | :heavy_check_mark: | N/A                |
| `checkName`        | *string*           | :heavy_check_mark: | N/A                |