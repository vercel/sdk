# TwoHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFive } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: TwoHundredAndFive = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "foolhardy-draw.net",
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