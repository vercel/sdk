# FourHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyOne } from "@vercel/sdk/models/fourhundredandsix.js";

let value: FourHundredAndFortyOne = {
  projectId: "<id>",
  projectName: "<value>",
  public: false,
  repositoryName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `public`           | *boolean*          | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |