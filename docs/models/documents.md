# Documents

A single document included in a bulk compliance download.

## Example Usage

```typescript
import { Documents } from "@vercel/sdk/models/fortyfour.js";

let value: Documents = {
  slug: "<value>",
  documentId: "<id>",
  title: "<value>",
  fingerprint: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `slug`             | *string*           | :heavy_check_mark: | N/A                |
| `documentId`       | *string*           | :heavy_check_mark: | N/A                |
| `title`            | *string*           | :heavy_check_mark: | N/A                |
| `fingerprint`      | *string*           | :heavy_check_mark: | N/A                |