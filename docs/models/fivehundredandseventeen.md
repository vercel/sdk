# FiveHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSeventeen } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  reference: "<value>",
  repositoryName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `reference`        | *string*           | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |