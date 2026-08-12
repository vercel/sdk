# FourHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundred } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: FourHundred = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  reference: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |
| `reference`        | *string*           | :heavy_check_mark: | N/A                |