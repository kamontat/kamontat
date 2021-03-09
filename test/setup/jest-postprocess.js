import { createSerializer } from "@emotion/jest"
import * as emotion from "@emotion/react"

import "@testing-library/jest-dom"

expect.addSnapshotSerializer(createSerializer(emotion))
