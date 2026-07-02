# Operation

Docker/OCI build instruction associated with an image layer.

## Example Usage

```typescript
import { Operation } from "@vercel/sdk/models/vcrimagelayer.js";

let value: Operation = "RUN";
```

## Values

```typescript
"ADD" | "ARG" | "CMD" | "COPY" | "ENTRYPOINT" | "ENV" | "EXPOSE" | "FROM" | "HEALTHCHECK" | "LABEL" | "ONBUILD" | "RUN" | "SHELL" | "STOPSIGNAL" | "UNKNOWN" | "USER" | "VOLUME" | "WORKDIR"
```