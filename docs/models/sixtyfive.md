# SixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFive } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: SixtyFive = {
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