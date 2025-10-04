# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/userevent.js";

let value: SeventyEight = {
  projectName: "<value>",
  branch: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `branch`           | *string*           | :heavy_check_mark: | N/A                |