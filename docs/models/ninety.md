# Ninety

The payload of the event, if requested.

## Example Usage

```typescript
import { Ninety } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: Ninety = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `srcImages`        | *string*[]         | :heavy_check_mark: | N/A                |