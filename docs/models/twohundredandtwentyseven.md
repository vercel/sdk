# TwoHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySeven } from "@vercel/sdk/models/removedusers.js";

let value: TwoHundredAndTwentySeven = {
  oldProjectId: "<id>",
  oldProjectName: "<value>",
  newProjectId: "<id>",
  newProjectName: "<value>",
  domain: "far-flung-kinase.com",
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