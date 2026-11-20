# FiveHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndEleven } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndEleven = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |