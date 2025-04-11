# FavoriteProjectsAndSpaces

A list of projects and spaces across teams that a user has marked as a favorite.

## Example Usage

```typescript
import { FavoriteProjectsAndSpaces } from "@vercel/sdk/models/authuser.js";

let value: FavoriteProjectsAndSpaces = {
  teamId: "<id>",
  projectId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `teamId`           | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |