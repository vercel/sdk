# FavoriteProjectsAndSpaces2

A list of projects and spaces across teams that a user has marked as a favorite.

## Example Usage

```typescript
import { FavoriteProjectsAndSpaces2 } from "@vercel/sdk/models/authuser.js";

let value: FavoriteProjectsAndSpaces2 = {
  spaceId: "<id>",
  scopeSlug: "<value>",
  scopeId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `spaceId`          | *string*           | :heavy_check_mark: | N/A                |
| `scopeSlug`        | *string*           | :heavy_check_mark: | N/A                |
| `scopeId`          | *string*           | :heavy_check_mark: | N/A                |
| `teamId`           | *string*           | :heavy_minus_sign: | N/A                |