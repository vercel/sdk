# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/jobdeployhook.js";

let value: SeventyNine = {
  name: "<value>",
  cdnEnabled: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `cdnEnabled`       | *boolean*          | :heavy_check_mark: | N/A                |