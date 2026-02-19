# OneHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  newProjectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `newProjectName`   | *string*           | :heavy_check_mark: | N/A                |