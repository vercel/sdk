# FourHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyFour } from "@vercel/sdk/models/fourhundredandtwo.js";

let value: FourHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  public: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |
| `public`           | *boolean*          | :heavy_check_mark: | N/A                |