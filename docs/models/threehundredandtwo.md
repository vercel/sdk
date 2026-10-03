# ThreeHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwo } from "@vercel/sdk/models/twohundredandninetyfive.js";

let value: ThreeHundredAndTwo = {
  domain: "uneven-council.org",
  newProjectId: "<id>",
  newProjectName: "<value>",
  oldProjectId: "<id>",
  oldProjectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `newProjectId`     | *string*           | :heavy_check_mark: | N/A                |
| `newProjectName`   | *string*           | :heavy_check_mark: | N/A                |
| `oldProjectId`     | *string*           | :heavy_check_mark: | N/A                |
| `oldProjectName`   | *string*           | :heavy_check_mark: | N/A                |