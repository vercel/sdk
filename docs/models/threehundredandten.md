# ThreeHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTen } from "@vercel/sdk/models/threehundredandeight.js";

let value: ThreeHundredAndTen = {
  domain: "esteemed-partridge.info",
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