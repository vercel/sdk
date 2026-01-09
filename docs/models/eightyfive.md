# EightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFive } from "@vercel/sdk/models/userevent.js";

let value: EightyFive = {
  projectName: "<value>",
  branch: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `branch`           | *string*           | :heavy_check_mark: | N/A                |