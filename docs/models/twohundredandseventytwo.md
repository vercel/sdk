# TwoHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyTwo } from "@vercel/sdk/models/twohundredandsixty.js";

let value: TwoHundredAndSeventyTwo = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "quiet-inspection.name",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `oldProjectId`     | *string*           | :heavy_check_mark: | N/A                |
| `oldProjectName`   | *string*           | :heavy_check_mark: | N/A                |
| `newProjectId`     | *string*           | :heavy_check_mark: | N/A                |
| `newProjectName`   | *string*           | :heavy_check_mark: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |